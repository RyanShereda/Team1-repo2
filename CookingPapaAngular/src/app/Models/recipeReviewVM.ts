//For put/post RecipeReviewController
export interface RecipeReviewVM{
    recipeReviewId: number;
    userId: number;
    recipeId: number;
    recipeReviewRating: 0|1|2|3|4|5;
    recipeReviewComment: string;
}