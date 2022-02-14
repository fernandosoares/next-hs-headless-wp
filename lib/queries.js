export const QUERY_GET_PRIMARY_MENU = `
query {
  menuItems(where: {location: PRIMARY}) {
    edges {
      node {
        id
        databaseId
        label
        path
      }
    }
  }
}
`

export const QUERY_SETTINGS = `
query {
  allSettings {
    generalSettingsUrl
    generalSettingsTitle
    generalSettingsTimezone
    readingSettingsPostsPerPage
    generalSettingsDescription
  }
}
`

export const QUERY_POSTS = `
query {
  posts {
    nodes {
      id
      title
      slug
      excerpt
      date
    }
  }
}
`
export const QUERY_POST = `
query GET_POSTS($id: ID!) {
  post(id: $id, idType: SLUG) {
    id
    title
    slug
    content
    date
  }
}
`

export const QUERY_SLUGS = `
query {
  posts {
    nodes {
      slug
    }
  }
}
`
