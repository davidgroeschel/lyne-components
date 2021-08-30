# lyne-panel



<!-- Auto Generated Below -->


## Properties

| Property                  | Attribute     | Description                                                | Type                                                                    | Default     |
| ------------------------- | ------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------- | ----------- |
| `buttonText` _(required)_ | `button-text` | The text to use as button text                             | `string`                                                                | `undefined` |
| `eventId`                 | `event-id`    | Id which is sent in the click event payload for the button | `string`                                                                | `undefined` |
| `tag`                     | `tag`         | The tag to use for the text element                        | `"h1" \| "h2" \| "h3" \| "h4" \| "h5" \| "h6" \| "h7" \| "p" \| "span"` | `'p'`       |
| `text` _(required)_       | `text`        | The text to show in the panel                              | `string`                                                                | `undefined` |


## Dependencies

### Depends on

- [lyne-button](../lyne-button)

### Graph
```mermaid
graph TD;
  lyne-panel --> lyne-button
  style lyne-panel fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

