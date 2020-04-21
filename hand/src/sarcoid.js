import React from 'react'
import { Tab, Image } from 'semantic-ui-react'

const panes = [
    { menuItem: 'Introduction', render: () =>
	<Tab.Pane>
	    <Image src="orig/sarcoidosisp4191185.jpg" floated="left" />
	    <h3>Sarcoid</h3>
	    <p>A multisystemic disease of unknown etiology which results in noncaseating granulomas found throughout various organ systems including the osseous structures. This process occurs approximately ten times more frequently within the black population with an increased female predominance.</p>
	    
	    <h3>Distribution:</h3>
	    <p>The hands are the most common site of osseous involvement. The middle and distal phalanges and less frequently the proximal phalanges and metatacarpals may show changes associated with sarcoidosis. Involvement at the wrist occurs much less frequently.</p>
	    
	    <h3>Radiographic Appearance:</h3>
	    <p>An abnormal trabecular lace-like pattern of destruction can often be seen at the phalanges and metacarpals of the hands. Cystic changes and osseous destructive lesions may also be evident. Acro-osteosclerosis with the radiographic appearance of terminal phlangeal sclerosis is not specific; however, it has been reported in up to half of the patients with skeletal abnormalities of sarcoidosis. Soft tissue swelling, and inflammatory skin nodules (erythema nodosum) are occasionally noted. If the wrist is involved, cystic changes and lytic lesions may be present.</p>
	    
	    <h3>Differential Diagnosis:</h3>
	    <p>The abnormal trabecular pattern of destruction at the hands is fairly characteristic of sarcoidosis. If osseous destruction is present at the distal phalanges, the appearance may be similar to findings associated with scleroderma. However, scleroderma has fairly characteristic associated soft tissue findings which distinguish it from sarcoidosis.</p>
	</Tab.Pane> },

    { menuItem: 'Distribution', render: () =>
	<Tab.Pane>
	    <Image src="orig/sarcoid500.gif" floated="left" /> 
	    <table border="1">
		<tr> 
		    <th width="200" class="joint">Joint</th>
		    <th width="100" class="joint">Frequency</th>
		    <th>&nbsp;</th>
		</tr>
		<tr> 
		    <td class="joint">Distal Phalanges</td>
		    <td class="freq">+++</td>
		    <td><Image src="orig/sarcoidosisdip&#32;copy.jpg" width="101" height="100" /></td>
		</tr>
		<tr> 
		    <td class="joint">Middle Phalanges</td>
		    <td class="freq">+++</td>
		    <td><Image src="orig/sarcoidosispip&#32;copy.jpg" width="101" height="100" /></td>
		</tr>
		<tr> 
		    <td class="joint">Proximal Phalanges</td>
		    <td class="freq">++</td>
		    <td>&nbsp;</td>
		</tr>
		<tr> 
		    <td class="joint">Metacarpal Boness</td>
		    <td class="freq">+</td>
		    <td>&nbsp;</td>
		</tr>
		<tr> 
		    <td class="joint">Carpal Bones</td>
		    <td class="freq">-</td>
		    <td>&nbsp;</td>
		</tr>
	    </table>    
	</Tab.Pane> },
    { menuItem: 'Links', render: () =>
	<Tab.Pane>
  <h3>Similar cases on the Internet</h3>
  <ol class="linklist">
    <li>CRWU<br />
      <a href="http://www.uhrad.com/msiarc/msi019.htm">http://www.uhrad.com/msiarc/msi019.htm</a><br />
    </li>
    <li>Indiana University<br />
      <a href="http://www.indyrad.iupui.edu/public/ddaven/Arthritis_Images/set5/case3/page.htm">http://www.indyrad.iupui.edu/public/ddaven/Arthritis_Images/set5/case3/page.htm</a></li>
    <li>Faculté de Médecine de Rennes<br />
      <a href="http://noemed.univ-rennes1.fr/cgi-bin/iw/dossier.pl?GB%2B1526">http://noemed.univ-rennes1.fr/cgi-bin/iw/dossier.pl?GB+1526</a><br />
      <a href="http://noemed.univ-rennes1.fr/cgi-bin/iw/dossier.pl?GB%2B1416%2B">http://noemed.univ-rennes1.fr/cgi-bin/iw/dossier.pl?GB+1416+<br />
      </a><a href="http://noemed.univ-rennes1.fr/cgi-bin/iw/dossier.pl?GB%2B1525">http://noemed.univ-rennes1.fr/cgi-bin/iw/dossier.pl?GB+1525</a></li>
  </ol>

	</Tab.Pane> },

    { menuItem: 'References', render: () =>
	<Tab.Pane>
    <ol class="reflist">
      <li> Wright GD, Doherty M. <br />
        <b>Unusual but memorable. Osseous involvement in chronic sarcoidosis</b>.<br />
        <i><a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=11396511&dopt=Abstract">Ann 
        Rheum Dis. 1997 Mar;56(3):183</a></i>. [<a href="http://ard.bmjjournals.com/cgi/content/full/56/3/183">Full 
        Text</a>]<br />
        <br />
      </li>
      <li>Bigattini D, Daenen B, Dondelinger RF. <br />
        <b>Osseous sarcoidosis.</b><br />
        <a href="http://www.ncbi.nlm.nih.gov/entrez/query.fcgi?cmd=Retrieve&db=PubMed&list_uids=11155865&dopt=Abstract">JBR-BTR. 
        1999 Jun;82(3):108</a>. No abstract available.<br />
        <br />
      </li>
    </ol>

	</Tab.Pane> },
    
]

const Sarcoid = () => <Tab panes={panes} />

export default Sarcoid
