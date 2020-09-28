import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar'
import ArtView from './ArtView';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

class QuizPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            artList: [{ src: "oath.jpg", name: "Oath of the Horatii" },
            { src: "socrates.jpg", name: "The Death of Socrates" },
            { src: "seneca.jpg", name: "Death of Seneca" },
            { src: "lunch.jpg", name: "Luncheon of the Boating Party" },
            { src: "sis.jpg", name: "Two Sisters" },
            { src: "bal.jpg", name: "Bal du moulin de la Galette" },
            { src: "oly.jpg", name: "Olympia" },
            { src: "bar.jpg", name: "A Bar at the Folies-Bergère" },
            { src: "grass.jpg", name: "The Luncheon on the Grass" },
            { src: "sun.jpg", name: "Impression, Sunrise" },
            { src: "lil.jpg", name: "Water Lillies" },
            { src: "woman.jpg", name: "Woman with a Parasol" }],
            count: 0,
            paintingResponse: "",
            artistResponse: ""
        };
    }

    changeArt = () => {
        var a = this.state.count;
        a += 1;
        if (a === this.state.artList.length) {
            a = 0;
        }
        this.setState({
            count: a
        });

        this.clear();
    }

    clear = () => {
        this.setState({
            paintingResponse: "",
            artistResponse: ""
        });
        document.getElementById("artistName").value = "";
        document.getElementById("paintingName").value = "";
    }

    checkArtist = (artist) => {
        var b = artist;
        if (b === "Jacques-Louis David" || b === "Jacques Louis David" || b === "David" || b === "david") { return "David"; }
        else if (b === "Pierre-Auguste Renoir" || b === "Pierre Auguste Renoir" || b === "Renoir" || b === "renoir" || b === "Auguste Renoir") { return "Renoir"; }
        else if (b === "Edouard Manet" || b === "Manet" || b === "manet" || b === "Édouard Manet") { return "Manet"; }
        else if (b === "Claude Monet" || b === "Monet" || b === "monet") { return "Monet"; }
    }

    checkName = () => {
        var a = this.state.count;
        var correctArtist = "";
        if (a < 3) {
            correctArtist = "David";
        }
        else if (a < 6) {
            correctArtist = "Renoir";
        }
        else if (a < 9) {
            correctArtist = "Manet";
        }
        else {
            correctArtist = "Monet";
        }
        return correctArtist;
    }

    checkRight = () => {
        var correctArtist = "";
        var artist = this.checkArtist(document.getElementById("artistName").value);
        var painting = document.getElementById("paintingName").value;
        var artistResponse = "";
        var paintingResponse = "";

        correctArtist = this.checkName();

        if (correctArtist === artist) {
            artistResponse = "Good job, " + artist + " is correct!";
        }
        else {
            artistResponse = "You absolute CHEESEBALL! That artist name is BEYOND incorrect!"
        }

        if (painting.toLowerCase() === this.state.artList[this.state.count].name.toLowerCase()) {
            paintingResponse = "Good job, " + this.state.artList[this.state.count].name + " is correct!";
        }
        else {
            paintingResponse = "You DINGUS! That's not even CLOSE to the painting name!"
        }

        this.setState({
            artistResponse: artistResponse,
            paintingResponse: paintingResponse
        });
    }

    homePage = () => {
        window.open("/");
    }

    tellArtist = () => {
        this.setState ({
            artistResponse: "The artist's name is " + this.checkName()
        });
    }

    tellPainting = () => {
        this.setState ({
            paintingResponse: "The painting's name is " + this.state.artList[this.state.count].name
        });
    }

    render() {
        return (<>
            <div>
                <AppBar style={{ height: "50px", textAlign: "center", backgroundColor: "azure", flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <Typography variant="h4" style={{ color: "black", fontFamily: "Garamond" }}>Welcome to my French Art Website! - Quiz Mode</Typography>
                </AppBar>
            </div>
            <div>
                <Grid
                    style={{ marginTop: "51px" }}
                    container
                    direction="row"
                    justifyContent="center">
                    <Grid item><ArtView src={this.state.artList[this.state.count].src} name="Guess the name of the Artist and Painting!"
                        click={this.changeArt}></ArtView>
                        <Button style={{ fontFamily: "Garamond", backgroundColor: "white", width: "820px", textAlign: "center" }} onClick={this.changeArt}>
                            Click the painting to change paintings
                                </Button>
                    </Grid>

                    <Grid item>
                        <Grid container
                            spacing={2}
                            style={{ padding: "11px", width: "715px" }}>
                            <Grid item>
                                <TextField id="artistName" label="Who's the artist?" variant="outlined" />
                            </Grid>

                            <Grid item>
                                <TextField id="paintingName" label="Painting name?" variant="outlined" />
                            </Grid>

                            <Grid item>
                                <Button style={{ fontFamily: "Garamond", fontSize: "20px", backgroundColor: "azure" }} onClick={this.checkRight}>Submit Answers!</Button>
                            </Grid>

                            <Grid item>
                                <Button style={{ fontFamily: "Garamond", fontSize: "13px", backgroundColor: "azure" }} onClick={this.homePage}>Go back to the gallery!</Button>
                            </Grid>

                            <Grid item>
                                <Button style={{ fontFamily: "Garamond", fontSize: "13px", backgroundColor: "azure" }} onClick={this.tellPainting}>Tell me the painting's name!</Button>
                            </Grid>

                            <Grid item>
                                <Button style={{ fontFamily: "Garamond", fontSize: "13px", backgroundColor: "azure" }} onClick={this.tellArtist}>Tell me the artist's name!</Button>
                            </Grid>

                            <Grid item>
                                <Typography variant="h3" style={{ fontFamily: "Garamond" }}>{this.state.paintingResponse}</Typography>
                            </Grid>

                            <Grid item>
                                <Typography variant="h3" style={{ fontFamily: "Garamond" }}>{this.state.artistResponse}</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>);
    }
}

export default QuizPage;