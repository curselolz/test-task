import Layout from 'frontend/components/App'

import { PATH } from 'frontend/core/configs'
import ContentWrapper from 'frontend/components/content/Content'
import Events from 'frontend/components/Events'
import Links from 'frontend/components/Links'
import Sharing from 'frontend/components/Sharing'
const routes = [
  {
    path: PATH.HOME.url,
    name: PATH.HOME.name,
    component: Layout,
  },
  {
    path: PATH.FILES.url,
    name: PATH.FILES.name,
    component: ContentWrapper,
  },
  {
    path: PATH.PHOTOS.url,
    name: PATH.PHOTOS.name,
    component: ContentWrapper,
  },
  {
    path: PATH.SHARING.url,
    name: PATH.SHARING.name,
    component: Sharing,
  },
  {
    path: PATH.EVENTS.url,
    name: PATH.EVENTS.name,
    component: Events,
  },
  {
    path: PATH.LINKS.url,
    name: PATH.LINKS.name,
    component: Links,
  },
]

export default routes
