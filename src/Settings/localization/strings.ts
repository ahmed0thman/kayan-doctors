import LocalizedStrings from "react-localization";
import { ar } from "./ar";
import { en } from "./en";

export let  strings = new LocalizedStrings({
  ar:ar,
  en:en
})

strings.setLanguage('en')