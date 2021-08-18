const stateDefault = {
    mangPhim: [
        { maPhim: 1, tenPhim: 'X-Men', hinhAnh: 'https://picsum.photos/id/1/1000/1000', moTa: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Interdum varius sit amet mattis vulputate enim nulla aliquet.' },
        { maPhim: 2, tenPhim: 'Avengers: End Game', hinhAnh: 'https://picsum.photos/id/2/1000/1000', moTa: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum pulvinar etiam non quam lacus suspendisse faucibus interdum posuere. Interdum varius sit amet mattis vulputate enim nulla aliquet.' }
    ]
}

export const PhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'LAY_DANH_SACH_PHIM': {
            state.mangPhim = action.mangPhim;
            return { ...state }
        }

        default: return state
    }
}