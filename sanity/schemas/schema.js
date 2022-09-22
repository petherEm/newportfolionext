// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import pageInfo from "./pageInfo";
import skill from "./skill";
import experience from "./experience";
import social from "./social";
import project from "./project";

export default createSchema({
  // We name our schema
  name: "default",

  types: schemaTypes.concat([pageInfo, skill, experience, social, project]),
});
