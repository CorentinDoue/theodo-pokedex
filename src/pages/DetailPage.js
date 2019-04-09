import React, {Component} from "react";
import {withStyles} from "@material-ui/core";
import Pokemon from "../components/Pokemon/Pokemon";

const styles = {
    detailPage: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        paddingBottom: '2.5rem'
    },
};

class DetailPage extends Component {
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.detailPage}>
                <Pokemon idPokemon={this.props.match.params.id} details={true}/>
            </div>
        );
    }
}

export default withStyles(styles)(DetailPage);
