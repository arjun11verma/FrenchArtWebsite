import React, { Component } from 'react';
import ArtView from './ArtView';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            artList: [{ src: "oath.jpg", name: "Oath of the Horatii" },
            { src: "socrates.jpg", name: "The Death of Socrates" },
            { src: "seneca.jpg", name: "Death of Seneca" },
            { src: "lunch.jpg", name: "Luncheon of the Boating Party" },
            { src: "sis.jpg", name: "Two Sisters"},
            { src: "bal.jpg", name: "Bal du moulin de la Galette"},
            { src: "oly.jpg", name: "Olympia"},
            { src: "bar.jpg", name: "A Bar at the Folies-Bergère"},
            { src: "grass.jpg", name: "The Luncheon on the Grass"},
            { src: "sun.jpg", name: "Impression, Sunrise"},
            { src: "lil.jpg", name: "Water Lillies"},
            { src: "woman.jpg", name: "Woman with a Parasol"},
            { src: "swine.png", name: "You uncultured swine!"}],
            swine: false,
            count: 0,
            description: "Hello",
            artist: "Jacques Louis David"
        };
        this.changeDescription("David");
    }

    changeArt = () => {
        if(!this.state.swine)
        {
            var a = this.state.count;
            var b = this.checkArtist(this.state.artist);
            a += 1;
            if (a === 3 && b === "David") { a = 0; }
            else if (a === 6 && b === "Renoir") { a = 3; }
            else if ( a === 9 && b === "Manet" ) { a = 6; }
            else if( a === 12 && b === "Monet") { a = 9; }
            this.setState({ count: a });
        }
    }

    changeArtist = () => {
        var a = 0;
        var b = "You uncultured swine!";
        var s = false;
        var artist = this.checkArtist(document.getElementById("artistName").value);

        if (artist === "David") {
            a = 0;
            b = "Jacques Louis David";
        }
        else if (artist === "Renoir") {
            a = 3;
            b = "Pierre-Auguste Renoir";
        }
        else if (artist === "Manet") {
            a = 6;
            b = "Édouard Manet";
        }
        else if (artist === "Monet") {
            a = 9;
            b = "Claude Monet";
        } 
        else {
            a = this.state.artList.length - 1;
            s = true;
        }

        document.getElementById("artistName").value = "";

        this.setState({
            artist: b,
            count: a,
            swine: s
        });

    }

    checkArtist = (artist) => {
        var b = artist;
        if (b === "Jacques-Louis David" || b === "Jacques Louis David" || b === "David" || b === "david") { return "David"; }
        else if( b === "Pierre-Auguste Renoir" || b === "Pierre Auguste Renoir" || b === "Renoir" || b === "renoir" || b === "Auguste Renoir") { return "Renoir"; }
        else if( b === "Edouard Manet" || b === "Manet" || b === "manet" || b === "Édouard Manet") { return "Manet"; }
        else if( b === "Claude Monet" || b === "Monet" || b === "monet") { return "Monet"; }
    }

    changeDescription = (artist) => {
        var b = this.checkArtist(artist);
        if (b === "David") {
            return "Jacques-Louis David was a French painter in the Neoclassical style, considered to be the preeminent painter of the era."
                + " In the 1780s his cerebral brand of history painting marked a change in taste away from Rococo frivolity toward classical austerity and severity"
                + " and heightened feeling, harmonizing with the moral climate of the final years of the Ancien Régime. His most notable works can be seen to the left.";
        }
        else if (b === "Renoir") {
            return "Pierre-Auguste Renoir, commonly known as Auguste Renoir, was a French artist who was a leading painter in the development of" +
            " the Impressionist style. As a celebrator of beauty and especially feminine sensuality, it has been said that Renoir is the final " +
            "representative of a tradition which runs directly from Rubens to Watteau.";
        }
        else if (b === "Manet") {
            return "Édouard Manet was a French modernist painter. He was one of the first 19th-century artists to paint modern life, and a pivotal" +
            " figure in the transition from Realism to Impressionism.";
        }
        else if(b === "Monet") {
            return "Oscar-Claude Monet was a French painter, a founder of French Impressionist painting and the most consistent and prolific practitioner " +
            "of the movement's philosophy of expressing one's perceptions before nature, especially as applied to plein air landscape painting. The term " +
            "Impressionism is derived from the title of his painting Impression, Sunrise, which was exhibited in 1874 in the first of the independent" +
            " exhibitions mounted by Monet and his associates as an alternative to the Salon de Paris.";
        }
        else {
            return "Please select a valid artist, you uncultured swine.";
        }
    }

    changePage = () => {
        window.open("/QuizPage");
    }

    render() {
        return (<>
            <div>
                <AppBar style={{ height: "50px", textAlign: "center", backgroundColor: "azure", flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Typography variant="h4" style={{ color: "black", fontFamily: "Garamond" }}>Welcome to my French Art Website! - Gallery Mode</Typography>
                </AppBar>

                <Grid
                    container
                    justifyContent = 'center'
                    alignItem = 'center'
                    direction='column'>
                    <Grid
                        item
                        alignItems='center'
                        justify='center'
                        style={{ position: "relative", marginTop: "50px" }}>
                        <Grid item>
                            <ArtView
                                name={this.state.artList[this.state.count].name}
                                src={this.state.artList[this.state.count].src}
                                click = {this.changeArt}
                            >
                            </ArtView>
                        </Grid>
                        <Grid item>
                            <Button style={{ fontFamily: "Garamond", backgroundColor: "white", width: "820px", textAlign: "center" }} onClick={this.changeArt}>
                                Click the painting to change paintings
                                </Button>
                        </Grid>
                    </Grid>

                    <Grid
                        item
                        container
                        direction="row"
                        alignItems="center"
                        justifyContent="center"
                        spacing={1}
                        style = {{position: "absolute", width: "700px", marginLeft: "826px", marginTop: "60px"}}>
                        <Grid item> <TextField id = "artistName" label="Enter an Artist's Name" variant = "outlined"/> </Grid>
                        <Grid item> <Button style={{ fontFamily: "Garamond", fontSize: "20px", backgroundColor: "azure" }} onClick={this.changeArtist}>Change Artists!</Button> </Grid>
                        <Grid item> <Button style = {{ fontFamily: "Garamond", fontSize: "20px", backgroundColor: "azure" }} onClick={this.changePage}>Go to Quiz Mode!</Button></Grid>
                        <Grid item> <br></br> </Grid>
                        <Grid item> <Typography variant="h5" style={{ fontFamily: "Garamond" }}>The selected artist is - {this.state.artist}</Typography> </Grid>
                        <Grid item> <Typography variant="h6" style={{ fontFamily: "Garamond", width: "670px" }}>{this.changeDescription(this.state.artist)}</Typography> </Grid>
                    </Grid>
                </Grid>
            </div>
        </>)
    }
}

export default HomePage;