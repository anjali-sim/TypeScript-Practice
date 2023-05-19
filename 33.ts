export interface Box {
    height :number;
    width: number;
}
//If we apply export to only one interface, then we get error
//Individual declarations in merged declaration 'Box' must be all exported or all local.

export interface Box {
    scale: number;
}

const box : Box = {height:20, width:10, scale: 5}

// export default Box