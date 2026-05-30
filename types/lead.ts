export type Lead = {
  id: string;
  name: string;
  company: string | null;
  phone: string;
  city: string | null;
  need_type: string | null;
  temperature_need: string | null;
  message: string | null;
  source: string | null;
  created_at: string;
};

export type LeadFormPayload = {
  name: string;
  company?: string;
  phone: string;
  city?: string;
  need_type?: string;
  temperature_need?: string;
  message?: string;
  source?: string;
};
