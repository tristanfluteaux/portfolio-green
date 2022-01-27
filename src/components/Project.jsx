import React, { Component } from "react";
import {
  Tab,
  Tabs,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  CardText,
} from "react-mdl";

import "./Project.css";

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="project-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn.futura-sciences.com/buildsv6/images/wide1920/9/4/0/940b22eda6_50170334_code-informatique.jpg) center / cover",
              }}
            >
              WeCode
            </CardTitle>
            <CardText>
              1st Projet : vitrine responsive sur le monde numérique HTML / CSS
            </CardText>
            <CardActions border>
              <Button href="https://github.com/tristanfluteaux/wecode" colored>
                Github
              </Button>
              <Button href="https://we-code.netlify.app/" colored>
                Link
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) center / cover",
              }}
            >
              Kokomo
            </CardTitle>
            <CardText>
              2nd Projet : Application responsive de cocktail sur React
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/WildCodeSchool/remote-fr-june21-kokomo"
                colored
              >
                Github
              </Button>
              <Button href="https://wild-kokomo.netlify.app/" colored>
                Link
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://images.pexels.com/photos/7829101/pexels-photo-7829101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) center / cover",
              }}
            >
              StarLove
            </CardTitle>
            <CardText>
              Hackathon : Application de rencontre intergalactique sur le thème
              de StarWars réalisé en 35h sur React
            </CardText>
            <CardActions border>
              <Button href="https://github.com/tristanfluteaux/r5d5" colored>
                Github
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>
          {/* Project game */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn.dribbble.com/users/277378/screenshots/6038397/chickenloopdribbble_still_2x.gif?compress=1&resize=400x300",
              }}
            >
              Chicken nuggets
            </CardTitle>
            <CardText>
              Hackathon Game Jam : jeu vidéo 2D pendant 45h en équipe créer sur
              Unity en langage C#
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/tristanfluteaux/chickennuggets"
                colored
              >
                Github
              </Button>
              <Button
                href="https://simmer.io/@DanForstesque/chicken-nuggets"
                colored
              >
                Link
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>

          {/* Project 4 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background: `url(data:image/png;base64,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) center / cover`,
              }}
            ></CardTitle>
            <CardText>
              Projet réel : Création d'un site front et back end pour le client
              réel La Boite d'à côté (projet client donc non publiable)
            </CardText>
            <CardActions border>
              <Button
                href="https://github.com/tristanfluteaux/0621-racoon-p3-laboite-front"
                colored
              >
                Github Front
              </Button>
              <Button
                href="https://github.com/tristanfluteaux/0621-racoon-p3-laboite-back"
                colored
              >
                Github Back
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="project-grid">
          {/* Project Pokemon */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cd6baedb-fdd4-435e-b96d-43b11622a285/dd2ceku-a9ce3d71-d601-4522-b3a4-6af3aa847c46.png/v1/fill/w_622,h_350,q_70,strp/pokeball_by_quickboomcg_dd2ceku-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvY2Q2YmFlZGItZmRkNC00MzVlLWI5NmQtNDNiMTE2MjJhMjg1XC9kZDJjZWt1LWE5Y2UzZDcxLWQ2MDEtNDUyMi1iM2E0LTZhZjNhYTg0N2M0Ni5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.0bs7XnOMdXUB9m7WQzMaD2XOM5VCPbv1rp54-RJrvmQ) center / cover",
              }}
            >
              Pokedex
            </CardTitle>
            <CardText>Projet Geek : Application Pokémon sur React</CardText>
            <CardActions border>
              <Button
                href="https://github.com/tristanfluteaux/my-pokedex"
                colored
              >
                Github
              </Button>
              <Button href="https://et-pokedex.netlify.app/" colored>
                Link
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://images5.fanpop.com/image/photos/28000000/Guitar-guitar-28014994-1920-1200.jpg) center / cover",
              }}
            >
              Get Volumes
            </CardTitle>
            <CardText>E commerce de guitare sur React et Node.js et MySql</CardText>
            <CardActions border>
              <Button
                href="https://github.com/tristanfluteaux/getVolumes-front/tree/main/getvolumes-front"
                colored
              >
                Github Front
              </Button>
              <Button href="https://github.com/tristanfluteaux/getVolumes-back" colored>
                Github Back
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}></CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="category-tabs" id="section-project">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Wild Code School</Tab>
          <Tab>Side Project</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Project;
