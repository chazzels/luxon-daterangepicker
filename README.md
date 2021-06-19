# Luxon Date Range Picker

![Improvely.com](https://i.imgur.com/UTRlaar.png)

## Read Me
This is a fork of the Date Range Picker component with changes made to remove the Moment.js dependancy and replace all date and time functionality with Luxon Library. The bulk of this conversion has been acccomplished, with a few features not fully working. The example page provided by the original repository is almost entirely functional. 

#### Improvements:
- option to defining a minimum number of days range can be made of. (`option.minSpan` number - days)
- option added to modify the format of the month shown in the calendars heading. (`option.monthFormat` string - luxon date code)
- allow reverse date range selection instead of requiring start date always be selected first. 
- enabled selection highlighting for both before and after the selected date.
- option to hide days that are not in the month being displayed. (`option.dayOverflow` boolean - default on)

#### Todo:
- extend event system to include more states of the component.

#### Notes:
- when using `minSpan`, ranges that do not meat this requirement will have days automatically added to them. This addition will respect the order the dates were selected in (e.g. if the `minSpan = 3` and the 26th is selected first then the 24th is selected, the range will automatically be changed to 23rd-26th and vice versa ).

### Fork Note
I attempted to limit the changes to keep the code as close to source, but I did add some features that weere not in the orginal library. Some of these I needed and others I felt help round out the functionality and experience. My main focus in doing this work was more on date range selection so the time picker and single picker could use some more refinement. My goal is to have the library fully working but I am limited by time and need. 

## Original Read Me:
This date range picker component creates a dropdown menu from which a user can
select a range of dates. I created it while building the UI for [Improvely](http://www.improvely.com), 
which needed a way to select date ranges for reports.

Features include limiting the selectable date range, localizable strings and date formats,
a single date picker mode, a time picker, and predefined date ranges.

## License

The MIT License (MIT)

Copyright (c) 2012-2020 Dan Grossman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
