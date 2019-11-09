# Problem Set 3

It's time to put your skills to the test. This problem set focuses on programming in JavaScript. More specifically, it focuses on using conditional statements to introduce branching logic to your programs.

## Getting Started

To get started, create a [GitHub](https://github.com/) repository to store your code. When you're finished, clone my skeleton to get all of the starter code and instructions. Setup a remote to push your code to your repository instead of mine.

### Setup

1. Login to your GitHub account and create a new repository named `pset-3`.
2. In the terminal, navigate to your `APCSP` directory on the `Desktop`.
```
$ cd ~/Desktop/APCSP
```
3. Clone my skeleton repository into a directory named `pset-3`.
```
$ git clone git@github.com:ap-principles-ucvts/pset-3-skeleton.git pset-3
````
4. Change into your newly created `pset-3` directory.
```
$ cd pset-3
```
5. Overwrite the remote, which originally points at my skeleton repository.
```
$ git remote rename origin upstream
```
6. Add a new remote that points at your `pset-3` repository. Replace `YOUR-USERNAME` with your actual username.
```
$ git remote add origin git@github.com:YOUR-USERNAME/pset-3.git
```
7. Install the required packages for reading user input. This command should be executed in the `pset-3` folder, and will create a `node_modules` folder that contains everything you need.
```
$ npm install
```
8. Open up the `change.js` file, which is in the `src` folder. All your `.js` files should go in the `src` folder.

The first exercise is partially done for you. You'll be on your own for the rest. There are a lot of exercises in this problem set, but none of them are too challenging. Take your time and try not to get frustrated.

## Exercises

The specifications for each exercise are outlined below. Your job is to write lines of code to solve the problems. Your code must meet the requirements set forth in this section. Each solution must be written in its own file, and named accordingly.

Work through these exercises on your own. Experiment, make mistakes, ask questions, and fix your mistakes. It's the only way to get good at programming.

### Exercise 1

I've written some code in `change.js`, but it's incomplete. It's supposed to print the number of quarters, dimes, nickels, and pennies needed to make change.

Your code needs to support numbers in the range [`0.01`, `0.99`]. Numbers outside of this range and non-numeric values are invalid. You may assume that all test cases, when valid, will have exactly two digits to the right of the decimal point.

There are two possible outputs.
* `Q quarters, D dimes, N nickels, and P pennies.`
* `Invalid.`

![Exercise 1 Output](https://github.com/ap-principles-ucvts/pset-3-skeleton/blob/master/images/change.png)

* Your code must be written in a file named `change.js`.
* Use `const` variables to represent the value of a quarter, dime, and nickel.
* Use `const` variables to represent the minimum and maximum values of the supported range.
* Your message must be grammatically correct and match mine **exactly**.

### Exercise 2

Prompt the user to enter an integer. Is it positive, negative, or zero?

Your code needs to support all numbers in the range [`Number.MIN_SAFE_INTEGER`, `Number.MAX_SAFE_INTEGER`]. Numbers outside of this range and non-numeric values are invalid.

`Number.MIN_SAFE_INTEGER` and `Number.MAX_SAFE_INTEGER` are constants built into the `Number` object. You'll have to do a little research to figure out what values they represent.

There are four possible outputs.
* `Positive.`
* `Negative.`
* `Zero.`
* `Invalid.`

![Exercise 2 Output](https://github.com/ap-principles-ucvts/pset-3-skeleton/blob/master/images/sign.png)

* Your code must be written in a file named `sign.js`.
* Your prompt and message must be grammatically correct and match mine **exactly**.

### Exercise 3

Prompt the user to enter an integer. Is it even or odd?

Remember, `0` is an even number. Your code needs to support all integers in the range [`Number.MIN_SAFE_INTEGER`, `Number.MAX_SAFE_INTEGER`]. Integers outside of this range, numbers with decimal components, and non-numeric values are invalid.

`Number.MIN_SAFE_INTEGER` and `Number.MAX_SAFE_INTEGER` are constants built into the `Number` object. You'll have to do a little research to figure out what values they represent.

There are three possible outputs.
* `Even.`
* `Odd.`
* `Invalid.`

![Exercise 3 Output](https://github.com/ap-principles-ucvts/pset-3-skeleton/blob/master/images/parity.png)

* Your code must be written in a file named `parity.js`.
* Your prompt and message must be grammatically correct and match mine **exactly**.

### Exercise 4

Prompt the user to enter three numbers. How are the numbers ordered?

Your code needs to support all numbers in the range [`Number.MIN_SAFE_INTEGER`, `Number.MAX_SAFE_INTEGER`]. Numbers outside of this range and non-numeric values are invalid.

`Number.MIN_SAFE_INTEGER` and `Number.MAX_SAFE_INTEGER` are constants built into the `Number` object. You'll have to do a little research to figure out what values they represent.

There are seven possible outputs.
* `Strictly increasing.`
* `Increasing.`
* `Equal.`
* `Decreasing.`
* `Strictly decreasing.`
* `Unordered.`
* `Invalid.`

![Exercise 4 Output](https://github.com/ap-principles-ucvts/pset-3-skeleton/blob/master/images/sequence.png)

* Your code must be written in a file named `sequence.js`.
* Your prompt and message must be grammatically correct and match mine **exactly**.

### Exercise 5

Prompt the user to enter a letter grade. What's the corresponding GPA?

Your code needs to support all valid letter grades (case-insensitively). All other letters and numeric values are invalid.

There are two possible outputs.
* `Your GPA is #.##.`
* `Invalid.`

Letter grades are given the following numeric equivalents.
* `A` is worth `4.00` points.
* `B` is worth `3.00` points.
* `C` is worth `2.00` points.
* `D` is worth `1.00` point.
* `F` is worth `0.00` points.

Each letter grade can be optionally suffixed with a `+` or `-`; a `+` increases the grade point for that letter by `0.33`, while a `-` decreases it by `0.33` points. The are a few exceptions to this. `A` and `A+` are both worth `4.00` points, and there is no `F+` or `F-`.

![Exercise 5 Output](https://github.com/ap-principles-ucvts/pset-3-skeleton/blob/master/images/gpa.png)

* Your code must be written in a file named `gpa.js`.
* Your prompt and message must be grammatically correct and match mine **exactly**.

### Exercise 6

Prompt the user to enter a grade. What's the corresponding letter grade?

Your code needs to support all numbers in the range [`0`, `100`]. Numbers outside of this range and non-numeric values are invalid.

There are two possible outputs.
* `You received a(n) X.`
* `Invalid.`

The grading policy is defined as follows.
* [`90`, `100`] constitutes an `A`.
* [`80`, `90`) constitutes a `B`.
* [`70`, `80`) constitutes a `C`.
* [`60`, `70`) constitutes a `D`.
* [`0`, `60`) constitutes an `F`.

![Exercise 6 Output](https://github.com/ap-principles-ucvts/pset-3-skeleton/blob/master/images/grades.png)

* Your code must be written in a file named `grades.js`.
* Use `const` variables to represent the thresholds between `A`, `B`, `C`, `D`, and `F`.
* Your prompt and message must be grammatically correct and match mine **exactly**.

### Exercise 7

Prompt the user to enter a year. Is it a leap year or not?

Your code needs to support all integers in the range [`0`, `Number.MAX_SAFE_INTEGER`]. Integers outside of this range, numbers with decimal components, and non-numeric values are invalid.

`Number.MAX_SAFE_INTEGER` is a constant built into the `Number` object. You'll have to do a little research to figure out what value it represents.

There are three possible outputs.
* `X is a leap year.`
* `X is not a leap year.`
* `Invalid.`

![Exercise 7 Output](https://github.com/ap-principles-ucvts/pset-3-skeleton/blob/master/images/years.png)

* Your code must be written in a file named `years.js`.
* Your prompt and message must be grammatically correct and match mine **exactly**.

### Exercise 8

Prompt the user to enter a playing card. What card was entered?

Your code must needs to support each of the four suits and all 13 ranks (case-insensitively). Character combinations that do not correspond to a playing card (as outlined below) are invalid.

The suits in a standard deck of playing cards are as follows.
* `Clubs`
* `Diamonds`
* `Hearts`
* `Spades`

The ranks in a standard deck of playing cards are as follows.
* `Two`
* `Three`
* `Four`
* `Five`
* `Six`
* `Seven`
* `Eight`
* `Nine`
* `Ten`
* `Jack`
* `Queen`
* `King`
* `Ace`

Suits will be encoded as a single character, as follows.
* `C` for Clubs
* `D` for Diamonds
* `H` for Hearts
* `S` for Spades

Ranks will be encoded as either a single digit or character, as follows.
* `2`
* `3`
* `4`
* `5`
* `6`
* `7`
* `8`
* `9`
* `T` for Ten
* `J` for Jack
* `Q` for Queen
* `K` for King
* `A` for Ace

There are two possible outputs.
* `Rank of Suit.`
* `Invalid.`

![Exercise 8 Output](https://github.com/ap-principles-ucvts/pset-3-skeleton/blob/master/images/cards.png)

* Your code must be written in a file named `cards.js`.
* Your prompt and message must be grammatically correct and match mine **exactly**.

### Exercise 9

Prompt the user to enter a month. How many days are in that month?

Your code needs to support each of the 12 months, either fully spelled out or abbreviated to the first three letters (case-insensitively). Text that does not correspond to one of the 12 months is invalid.

There are four possible outputs.
* `28 or 29 days.`
* `30 days.`
* `31 days.`
* `Invalid.`

![Exercise 9 Output](https://github.com/ap-principles-ucvts/pset-3-skeleton/blob/master/images/months.png)

* Your code must be written in a file named `months.js`.
* Your prompt and message must be grammatically correct and match mine **exactly**.

### Exercise 10

Prompt the user to enter a temperature and scale. At that temperature, is water a solid, liquid, or gas?

Your code needs to support all temperature values in the range [`Number.MIN_SAFE_INTEGER`, `Number.MAX_SAFE_INTEGER`], as well as three popular scales: Fahrenheit, Celsius, and Kelvin. Temperature values outside of this range and non-numeric values are invalid. Scales other than Fahrenheit, Celsius, and Kelvin are invalid.

Temperature scales will be encoded as a single character (case-insensitively), as follows.
* `F`
* `C`
* `K`

There are four possible outputs.
* `Solid.`
* `Liquid.`
* `Gas.`
* `Invalid.`

![Exercise 10 Output](https://github.com/ap-principles-ucvts/pset-3-skeleton/blob/master/images/temperature.png)

* Your code must be written in a file named `temperature.js`.
* Use `const` variables to represent the freezing and boiling points of water for each temperature scale.
* Your prompt and message must be grammatically correct and match mine **exactly**.

## Deliverables

You can run all of your problem set files in a single shot using the following command. Make sure you're in your `src` directory when you do so.
```
node change.js; node sign.js; node parity.js; node sequence.js; node gpa.js; node grades.js; node years.js; node cards.js; node months.js; node temperature.js
```

Pay close attention to this output because your code will be graded against it. There is exactly one line break at the beginning and end of the output. THere are exactly two line breaks between exercises.

When you run the chained command and enter the same values, your output should match mine exactly.

<span>
  <img src="https://github.com/ap-principles-ucvts/pset-3-skeleton/blob/master/images/deliverable-1.png" alt="Problem Set 3 Output" width="49.75%"/> <img src="https://github.com/ap-principles-ucvts/pset-3-skeleton/blob/master/images/deliverable-2.png" alt="Problem Set 3 Output" width="49.75%"/>
</span>

## Deadline

Please read very carefully. Historically, most students lose points on problem sets for simply failing to read the instructions and requirements.

* November 6, 2019, at 11:59pm.

If you submit your problem set at midnight (i.e., November 7, 2019, at 12:00am), it is considered **late**!

### Submission Requirements

* Your code **must** compile. Code that fails to meet this minimum requirement will not be accepted.
* There must be **at least** 10 unique commits to your repository.
* Your code must meet each requirement outlined in the *Exercises* and *Deliverables* sections.
* Your code must adhere to the course style guidelines.

Happy coding!
