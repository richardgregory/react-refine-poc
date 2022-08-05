export interface Event {
  id: number;
  type: "mixpanel";
  eventName: string;
  description?: string; 
}