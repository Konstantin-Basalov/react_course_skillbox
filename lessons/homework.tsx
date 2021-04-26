// 1.
import React, {Component} from "react";


function concatFunc(first: string, second: string): string {
    return first.concat(" ", second)
}

let str22 = concatFunc('Hello', 'World');

// 2.

interface IHomeTasks {
    howIDoIt: string,
    simeArray: [string, string, number],
    withData: [{howIDoIt: string, simeArray:[string, number]}]
}

const MyHometask: IHomeTasks = {

    howIDoIt: "I Do It Wel",

    simeArray: ["string one", "string two", 42],

    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],

}

// 3.

interface MyArray<T> {
    [n: number]: T,

    reduce<T>(fn: (accumulator: T, value:T) => T, initialValue: T): T
}

const arrHW: MyArray<number> = [1, 2, 4];

arrHW.reduce((a, b) => a + b, 10);

// 4.

interface IHomeTask {

    data: string;
    numbericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}

type MyPartial<T> = {

    [N in keyof T]?: T[N] extends object ? MyPartial<T[N]> : T[N];

}

const homeTask: MyPartial<IHomeTask> = {

    externalData: {
        value: 'win',

    }
}

// 5.

interface IProps {
    firstProp: string
}

function HomeComponent(props: IProps) {
    return (
        <div>
            { props.firstProp }
        </div>
    )
}

type TMyType<T> = T extends ((...args: infer R) => any) ? React.ElementType<R> : never;

type t = TMyType<typeof HomeComponent>;