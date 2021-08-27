## setThemeColorMeta

Demo:

```tsx
import React from 'react';
import { setThemeColorMeta } from 'set-meta-theme-color-color';

export default () => (
  <a
    style={{
      color: '#1890ff',
      cursor: 'pointer',
    }}
    onClick={() => {
      setThemeColorMeta('#1890ff');
    }}
  >
    修改为 #1890ff
  </a>
);
```
