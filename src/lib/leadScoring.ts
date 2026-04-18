/**
 * Lead Scoring System
 * Klassificeer en prioritiseer inkomende leads op basis van kwaliteit
 */

export interface FormDataWithScoring {
  name: string;
  email: string;
  phone: string;
  project: string;
  message: string;
  formType: 'offerte' | 'contact';
}

export interface ScoredLead extends FormDataWithScoring {
  score: number;
  rating: 'hot' | 'warm' | 'cold';
  timestamp: string;
}

interface ScoringCriteria {
  projectType: Record<string, number>;
  messageLength: { min: number; value: number; max: number; value2: number };
  phoneProvided: number;
  formType: Record<string, number>;
}

const SCORING_RULES: ScoringCriteria = {
  projectType: {
    'ruwbouw': 25,
    'afwerking': 20,
    'renovatie': 15,
    'projectcoördinatie': 25,
    'werfbeheer': 20,
    'bouwregie': 20,
    'kleine projecten': 10,
    'other': 5,
  },
  messageLength: {
    min: 20,
    value: 15, // 20-100 chars = 15 points
    max: 100,
    value2: 25, // 100+ chars = 25 points
  },
  phoneProvided: 20,
  formType: {
    'offerte': 30, // High intent
    'contact': 10, // Low intent
  },
};

export function scoreLeadQuality(formData: FormDataWithScoring): ScoredLead {
  let score = 0;

  // 1. Form type scoring
  const formTypeScore = SCORING_RULES.formType[formData.formType] || 0;
  score += formTypeScore;

  // 2. Project type scoring
  const projectTypeScore = Object.entries(SCORING_RULES.projectType).find(
    ([key]) => formData.project.toLowerCase().includes(key)
  )?.[1] || SCORING_RULES.projectType.other;
  score += projectTypeScore;

  // 3. Message detail scoring
  const messageLength = formData.message.length;
  if (messageLength >= SCORING_RULES.messageLength.min && messageLength <= SCORING_RULES.messageLength.max) {
    score += SCORING_RULES.messageLength.value;
  } else if (messageLength > SCORING_RULES.messageLength.max) {
    score += SCORING_RULES.messageLength.value2;
  }

  // 4. Phone provided scoring
  if (formData.phone && formData.phone.length > 0) {
    score += SCORING_RULES.phoneProvided;
  }

  // 5. Email domain quality (optional)
  const emailDomain = formData.email.split('@')[1];
  if (emailDomain && !emailDomain.includes('gmail') && !emailDomain.includes('hotmail')) {
    score += 10; // Company email = higher intent
  }

  // Determine rating
  let rating: 'hot' | 'warm' | 'cold' = 'cold';
  if (score >= 60) {
    rating = 'hot';
  } else if (score >= 40) {
    rating = 'warm';
  }

  return {
    ...formData,
    score,
    rating,
    timestamp: new Date().toISOString(),
  };
}

export function formatLeadForNotification(lead: ScoredLead): string {
  const ratingEmoji = {
    hot: '🔥',
    warm: '⚡',
    cold: '❄️',
  };

  return `
🚨 NIEUWE LEAD INGEKOMEN
${ratingEmoji[lead.rating]} Score: ${lead.score}/100 (${lead.rating.toUpperCase()})

👤 Naam: ${lead.name}
📧 Email: ${lead.email}
📞 Telefoon: ${lead.phone}
🏗️ Project Type: ${lead.project}
💬 Bericht: ${lead.message.substring(0, 100)}...

⏰ Ontvangen: ${new Date(lead.timestamp).toLocaleString('nl-BE')}
  `;
}

export function shouldNotifyViaSlack(lead: ScoredLead): boolean {
  // Send Slack notification for hot leads only (or all leads in first week)
  return lead.rating === 'hot' || lead.score >= 50;
}
