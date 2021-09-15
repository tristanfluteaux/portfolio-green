import React, { Component } from "react";
import { Tab, Tabs, Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from "react-mdl";

import './Project.css';

class Project extends Component {
    constructor(props) {
        super(props);
        this.state = {activeTab : 0};
    }

    toggleCategories(){
        if (this.state.activeTab === 0) {
        return (
            <div className='project-grid'>
            {/* Project 1 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://cdn.futura-sciences.com/buildsv6/images/wide1920/9/4/0/940b22eda6_50170334_code-informatique.jpg) center / cover'}}>WeCode</CardTitle>
                <CardText>
                    1st Projet : vitrine responsive sur le monde numérique HTML / CSS
                </CardText>
                <CardActions border>
                    <Button href='https://github.com/tristanfluteaux/wecode' colored>Github</Button>
                    <Button href='https://we-code.netlify.app/' colored>Link</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                </CardMenu>
            </Card>

            {/* Project 2 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.pexels.com/photos/109275/pexels-photo-109275.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) center / cover'}}>Kokomo</CardTitle>
                <CardText>
                    2nd Projet : Application responsive de cocktail sur React
                </CardText>
                <CardActions border>
                    <Button href='https://github.com/WildCodeSchool/remote-fr-june21-kokomo' colored>Github</Button>
                    <Button href='https://wild-kokomo.netlify.app/' colored>Link</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                </CardMenu>
            </Card>

            {/* Project 3 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images.pexels.com/photos/7829101/pexels-photo-7829101.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260) center / cover'}}>StarLove</CardTitle>
                <CardText>
                    Hackathon : Application de rencontre intergalactique sur le thème de StarWars réalisé en 35h sur React
                </CardText>
                <CardActions border>
                    <Button href='https://github.com/tristanfluteaux/r5d5' colored>Github</Button>
                    <Button href='' colored>Link</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                </CardMenu>
            </Card>
            </div>
        )
        } else if (this.state.activeTab === 1) {
            return (
                <div className='project-grid'>
                    {/* Project Pokemon */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/cd6baedb-fdd4-435e-b96d-43b11622a285/dd2ceku-a9ce3d71-d601-4522-b3a4-6af3aa847c46.png/v1/fill/w_622,h_350,q_70,strp/pokeball_by_quickboomcg_dd2ceku-350t.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvY2Q2YmFlZGItZmRkNC00MzVlLWI5NmQtNDNiMTE2MjJhMjg1XC9kZDJjZWt1LWE5Y2UzZDcxLWQ2MDEtNDUyMi1iM2E0LTZhZjNhYTg0N2M0Ni5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.0bs7XnOMdXUB9m7WQzMaD2XOM5VCPbv1rp54-RJrvmQ) center / cover'}}>Pokedex</CardTitle>
                    <CardText>
                    Projet Geek : Application Pokémon sur React (en développement)
                    </CardText>
                    <CardActions border>
                    <Button href='https://github.com/tristanfluteaux/my-pokedex' colored>Github</Button>
                    <Button colored>Link</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                    </CardMenu>
                    </Card>
                </div>
            )
        }
    }

    render() { 
        return (
        <div className='category-tabs' id='section-project'>
            <Tabs activeTab={this.state.activeTab} onChange={(tabId => this.setState({ activeTab : tabId }))} ripple >
                <Tab>Wild Code School</Tab>
                <Tab>Side Project</Tab>
            </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className='content'>{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
        </div>
        )
    }

}

export default Project;