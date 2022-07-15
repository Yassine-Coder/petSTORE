export const petColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "petname",
    headerName: "Pet",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.petname}
        </div>
      );
    },
  },

  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];

//temporary data
export const petRows = [
  {
    id: 1,
    petname: "Rex",
    img: "https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg",
    status: "active",
    age: 35,
  },
  {
    id: 2,
    petname: "Snoopy Doo",
    img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
    status: "passive",
    age: 42,
  },
  {
    id: 3,
    petname: "Lannister",
    img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    petname: "Stark",
    img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    petname: "Targaryen",
    img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
    status: "passive",
    age: 22,
  },
  {
    id: 6,
    petname: "Melisandre",
    img: "https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    petname: "Foxel",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "passive",
    age: 44,
  },
  {
    id: 8,
    petname: "Daxe",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    petname: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    petname: "Roxie 2",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    age: 65,
  },
];
