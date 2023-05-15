import Grid from "@mui/material/Grid";
import Item from "@mui/material/ListItem";
const Footer = () => {
  return (
    <div className="footer">
      <Grid container>
        <Grid item xs={12}>
          <Item className="text org">SigmaChads Software</Item>
        </Grid>
        <Grid container xs={10}>
          <Grid container>
            <Grid item xs={2}>
              <Item className="text">Михайло Овчаренко</Item>
            </Grid>
            <Grid item xs={2}>
              <Item className="text">Іван Бургард</Item>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={2}>
              <Item className="text">Вадим Сорокін</Item>
            </Grid>
            <Grid item xs={2}>
              <Item className="text">Ілля Кучук</Item>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={2}>
              <Item className="text">Максим Крикуха</Item>
            </Grid>
            <Grid item xs={2}>
              <Item className="text">Валерій Бурдуленко</Item>
            </Grid>
          </Grid>
        </Grid>
        <Grid container className="site_name" xs={2}>
          <Grid item className="text ">
            HeadHunter
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
export default Footer;
