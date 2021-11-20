import styled from 'styled-components'
import { Form } from '../components/Form'

const Background = styled.div`
	background: rgba(42, 214, 157, 0.5);
	display: flex;
	height: 100vh;
	flex-direction: column;
	row-gap: 3rem;
	align-items: center;
	justify-content: center;
`
const Text = styled.div`
	font-size: 40px;
`
export default function Home() {
	return (
		<Background>
			<Text>bili upload tool</Text>
			<Form></Form>
		</Background>
	)
}
