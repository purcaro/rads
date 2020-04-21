import React from 'react'
import { Tab, Image } from 'semantic-ui-react'

const panes = [
    { menuItem: 'Introduction', render: () =>
	<Tab.Pane>
	    <Image src="orig/Handwrist250.gif" width="139" height="250" />
	    <p>We created a web-based atlas of hand arthropathies using HTML (hypertext markup language). This atlas illustrates with radiographs and diagrams the common and not so common arthropathies of the hand. Radiographic appearance, distribution and differential diagnoses are discussed. References are linked to PubMed, allowing the user to have immediate access to the abstract and full text, if available online. Links to similar cases on other Internet teaching files are also provided. This atlas includes: rheumatoid arthritis, psoriatic arthritis, gouty arthritis, calcium pyrophosphate crystal deposition disease, hemochromatosis, sarcoidosis, scleroderma, multicentric reticulohistiocytosis, septic arthritis, silastic arthropathy, and osteoarthritis.
	    </p>
	</Tab.Pane> },
]

const Intro = () => <Tab panes={panes} />

export default Intro
