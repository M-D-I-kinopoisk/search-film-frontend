export interface NavBarProps {
    handleMouseEnter: (e) => void
    handleMouseLeave: (e) => void
}

export interface DropDownProps {
    headerModule: boolean
    categoryDropDown: string
    handleMouseEnter: (e: any) => void
    handleMouseLeave: (e: any) => void
    scrollList: number
    setScrollList: (i: any) => void
    listGenres : object[]
}
