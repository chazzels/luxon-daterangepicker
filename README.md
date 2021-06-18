# Luxon Date Range Picker

![Improvely.com](https://i.imgur.com/UTRlaar.png)

This is a fork of the Date Range Picker component with changes made to remove the Moment.js dependancy and replace all date and time functionality with Luxon Library. The bulk of this work has been acccomplished with a few features not fully working. The example page is almost entireely functional. My focus was more on date range selection so the time picker and single picker could use some more refinement. 

I attempted to limit the changes to keep the code close source, but I did add some features that weere not in the orginal library. 
#### Improvements:
- defining a minimum range on a selection. (`option.minSpan` number - days)
- option added to modify the format of the month shown in the calendars. (`option.monthFormat` string - luxon date code)
- allow reverse date range selection instead of requiring start date always be selected first. 
- enabled selection highlighting for both before and after the selected date.

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
