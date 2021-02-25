import styled from "styled-components";

const Footer = styled.footer` 
	display:flex; 
	background-color: tan;
	max-width: 500px;
	justify-content:center;
	margin:auto; 
`;
const Facebook = styled.a`
	color: blue;
`;

const Webdyfer = styled.a`
`;
// eslint-disable-next-line import/no-default-export
export default function Main(): JSX.Element {
	return (
		<>
		
	
		<Footer>	
			<div>	
				<h3>
					Contact us!
				</h3>
				
				<Facebook href='https://facebook.com' >
					Click me!
				</Facebook>

			</div>

			<div>	
				
				<p>
					Here is hazars home adress 1431 devonshire court
				</p>
			</div>
			<div>	
				<Webdyfer href='https://webdefyer.com'>	
					Need a better website visit webdyfer by clicking here.

				</Webdyfer>
					

			</div>


		</Footer>
		</>
	
	);
}
