declare module "@mdx-js/react" {
  import * as React from "react";
  export interface MDXProviderProps {
    children: React.ReactNode;
    components: any;
  }
  export class MDXProvider extends React.Component<MDXProviderProps> {}
}
