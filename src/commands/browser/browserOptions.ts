import type { CommandOptions } from '../../types';

/**
 * Options that are shared across all browser commands
 */
export interface SharedBrowserCommandOptions extends CommandOptions {
  /** URL to navigate to */
  url?: string;
  /** Global timeout for browser operations in milliseconds */
  timeout?: number;
  /** Whether to run browser in headless mode */
  headless?: boolean;
  /** Whether to capture and display HTML content */
  html?: boolean;
  /** Path to save screenshot to */
  screenshot?: string;
  /** Whether to capture and display console messages */
  console?: boolean;
  /** Whether to capture and display network activity */
  network?: boolean;
}

/**
 * Options specific to the browser open command
 */
export interface OpenCommandOptions extends SharedBrowserCommandOptions {
  /** Viewport size in format "widthxheight" (e.g. "1280x720") */
  viewport?: string;
  /** Port number to connect to existing Chrome instance */
  connectTo?: number;
  /** Wait condition after page load (time duration or CSS selector) */
  wait?: string;
}
