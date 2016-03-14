# Alerts

Simple short blinking alert messages

No need to include CSS file on prod. It's super simple.

## Settings

* container - DOM Element or Body if none

* duration - time to show an alert in miliseconds

## Usage

alerts.settings.container = document.getElementById('alerts_container');

alerts.settings.duration = 3000;

alerts.log('Logged');

alerts.success('Done');

alerts.error('Error');
