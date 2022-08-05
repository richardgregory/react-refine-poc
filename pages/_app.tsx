import { AppProps } from "next/app";

import { Refine } from "@pankod/refine-core";
//import { Layout, ReadyPage, notificationProvider, ErrorComponent } from "@pankod/refine-antd";

import {
  Layout,
  ErrorComponent,
  ReadyPage,
  LightTheme,
  CssBaseline,
  ThemeProvider,
  GlobalStyles,
  RefineSnackbarProvider,
  notificationProvider,
} from "@pankod/refine-mui";

import dataProvider from "@pankod/refine-simple-rest";
import routerProvider from "@pankod/refine-nextjs-router";
import { EventList } from "../src/components/events/list";
import { EventEdit } from "../src/components/events/edit";

const API_URL = "https://my-json-server.typicode.com/richardgregory/fake-server";

function App({ Component, pageProps }: AppProps): JSX.Element {
    return (
      <ThemeProvider theme={LightTheme}>
        <CssBaseline />
        <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
        <RefineSnackbarProvider>
          <Refine
              routerProvider={routerProvider}
              dataProvider={dataProvider(API_URL)}
              Layout={Layout}
              ReadyPage={ReadyPage}
              notificationProvider={notificationProvider}
              catchAll={<ErrorComponent />}
              resources={[
                {
                  name: "events",
                  list: EventList,
                  edit: EventEdit
                },
              ]}
          >
              <Component {...pageProps} />
          </Refine>
        </RefineSnackbarProvider>
      </ThemeProvider>
    );
}

export default App;