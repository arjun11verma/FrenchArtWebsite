import React, { Component } from 'react';
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import CardActionArea from '@material-ui/core/CardActionArea'

class ArtView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            //imagePath: require('./oath.jpg')
        };
    }

    getSrc = () => {
        return require(`./${this.props.src}`);
    }

    render() {
        return (<>
            <div>
                {
                    <div>
                        <CardActionArea style = {{width: "820px"}} onClick = {this.props.click}>
                            <Card
                                style={{ backgroundColor: "crimson", textAlign: "center", padding: "10px", width: "800px" }}>
                                <Typography variant="h4" style={{ fontFamily: "Garamond" }}>{this.props.name}</Typography>
                                <img src={this.getSrc()} alt="French Art" width="775px"></img>
                            </Card>
                        </CardActionArea>
                    </div>
                }
            </div>
        </>)
    }


}

export default ArtView;