export interface Event {
    type: string;
    title: string;
    description:string;
    organizer: string;
    start_date: string;
    end_date: string;
    website: string;
    email: string;
    venue: string;
    address: string;
    city: string;
    country: string;
    screenshot: string;
    
}

export interface EventsData {
    data: Event[];

}