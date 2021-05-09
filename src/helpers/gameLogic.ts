export const initDeck = () => {
    const cardsByName: string[] = [];
    const baseCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A' ]
    baseCards.forEach(c => {
        cardsByName.push(`${c}C`, `${c}D`, `${c}H`, `${c}S`)
    })
    return cardsByName;
}