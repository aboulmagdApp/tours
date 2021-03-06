import { TourSummary } from "./tourSummary";
import { Review } from "./reviews";


export class TourDetail extends TourSummary {
    tourCategory: string
    tourDescription: string
    price: number
    currency: string
    img: string[]
    reviews: Review[]
    constructor(tourData: any, reviewData: any, tourImages: string[]) {
        super(tourData);
        this.tourCategory = tourData.tour_category;
        this.tourDescription = tourData.tour_description;
        this.price = tourData.price;
        this.currency = tourData.currency;
        this.img = tourImages;
        this.reviews = reviewData.map((item: any) => new Review(item));
    }
}