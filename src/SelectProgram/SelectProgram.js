import React, { useState } from 'react';
import {
    Card, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Container } from 'reactstrap';

const SelectProgram = (props) => {

    const programs = [
        {
            name: 'Starting Strength',
            summary: 'Starting Strength is a strength training system designed to safely and efficiently improve strength, health, and athletic performance using basic barbell exercises.',
            level: ['Beginner', 'Intermediate']
        },
        {
            name: '5/3/1',
            summary: 'The program is comprised of 3 and 4 week cycles, designed to run indefinitely.',
            level: ['Intermediate']
        },
        {
            name: 'Madcow 5×5',
            summary: 'Incorporates bodybuilder-friendly assistance work (along with lots of rows) with the fundamental Big 3 compound movements to create a simple but effective strength program.',
            level: ['Intermediate', 'Advanced']
        },
    ]

    return (
        <div style={{ maxWidth: "50%" }}>
            {programs.map(program =>
                <Card body className="text-left" >
                    <CardTitle tag="h5">{program.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{program.level.toString()}</CardSubtitle>
                    <CardBody>
                        <img width="100px" src="https://m.media-amazon.com/images/I/51qninUnshL.jpg" alt="Card image cap" />

                        <CardText className="text-wrap" >{program.summary}</CardText>
                        <Button>Choose</Button>
                    </CardBody>
                </Card>
            )}
        </div>
    )
}

export default SelectProgram;
