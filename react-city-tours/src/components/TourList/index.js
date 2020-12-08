import React, { Component } from 'react'
import "./TourList.scss"
import Tour from "../Tour/Tour"

export default class TourList extends Component {
    render() {
        return (
            <div>
                <section>
                    <Tour />
                </section>
            </div>
        )
    }
}
