export const generate = (input: number): number[] => {
    if (input < 2) 
        return []
    if (input % 2 == 0) {
        return [input]
    }
}