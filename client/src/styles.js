import { makeStyles } from "@material-ui/core/styles";

// example styles
// export default makeStyles(() => ({
//     appBar: {
//         borderRadius: 15,
//         margin: '30px 0',
//         display: 'flex',
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     heading: {
//         color: 'rgba(0,183,255, 1)',
//     },
//     image: {
//         marginLeft: '15px',
//     },
// }));

export default makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    fontFamily: "Roboto",
    height: "100vh",
  },
  menuButton: {
    marginRight: theme.spacing(2),
    textTransform: "none",
  },
  title: {
    flexGrow: 1,
  },
  navDisplayFlex: {
    display: "flex",
    justifyContent: "space-between",
    minHeight: "100%",
  },
  linkText: {
    textDecoration: "none",
    color: "black",
  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
}));
