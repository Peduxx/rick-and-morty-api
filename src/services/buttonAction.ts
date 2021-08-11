export function Next(currentPage: number){
    if(currentPage < 34){
        currentPage += 1;
    }
}
export function Back(currentPage: number){
    if(currentPage > 0){
        currentPage -= 1;
    }
}