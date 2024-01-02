import React from 'react';
import {Route, Switch} from "react-router-dom";
import NotFound from "../Layout/NotFound";
import DeckStudy from "./DeckStudy";
import DeckForm from "./DeckForm";
import DeckScreen from "./DeckScreen";
import CardScreen from "./CardScreen";

function Decks({setDecksList}) {
    return (
        <Switch>
            <Route exact path="/decks/new">
                <DeckForm setDecksList={setDecksList} />
            </Route>
            <Route path="/decks/:deckId">
                <Switch>
                    <Route exact path="/decks/:deckId">
                        <DeckScreen />
                    </Route>
                    <Route exact path="/decks/:deckId/edit">
                        <DeckForm />
                    </Route>
                    <Route exact path="/decks/:deckId/cards/new">
                        <CardScreen />
                    </Route>
                    <Route exact path="/decks/:deckId/cards/:cardId/edit">
                        <CardScreen />
                    </Route>
                    <Route exact path="/decks/:deckId/study">
                        <DeckStudy />
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    )
}

export default Decks;