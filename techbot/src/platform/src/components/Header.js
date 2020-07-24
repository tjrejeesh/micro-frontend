import React from "react";
import {Grid, Segment} from "semantic-ui-react";

export default class Header extends React.Component {
    render() {
        return <header>
                    <Grid centered columns={3}>
                        <Grid.Column>
                        <h1>Welcome to Tech BOT</h1>
                        </Grid.Column>
                    </Grid>
               </header>;
    }
}
