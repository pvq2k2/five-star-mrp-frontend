import React from "react";
import AuthProvider from "./AuthProvider";
import MovieProvider from "./MovieProvider";
import NotificationProvider from "./NotificationProvider";
import SearchProvider from "./SearchProvider";
import ThemeProvider from "./ThemeProvider";

export default function ContextProviders({ children }) {
  return (
    <NotificationProvider>
      <SearchProvider>
        <MovieProvider>
          <AuthProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </AuthProvider>
        </MovieProvider>
      </SearchProvider>
    </NotificationProvider>
  );
}
