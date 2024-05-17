export interface IFavoriteButton {
    isFavorited: boolean;
    handleFavorite: (e: React.MouseEvent<HTMLButtonElement>) => void;
}