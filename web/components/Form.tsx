import React, { useRef, useEffect, useState, useReducer } from 'react'
import styled from 'styled-components'
import { Info } from './Info'

interface FormProps {}

const Container = styled.div`
	background: linear-gradient(
		111.54deg,
		rgba(108, 9, 221, 0.678) 0%,
		rgba(255, 34, 181, 0.473) 100%
	);
	display: flex;
	border-radius: 5px;
	flex-direction: column;
	flex-wrap: wrap;
	padding: 2rem;
	row-gap: 1rem;
	width: 1200px;
	align-items: center;
	justify-content: space-between;
`
const Infos = styled.div`
	background: none;
	max-width: 100%;
	min-width: 800px;
	display: flex;
	flex-direction: column;
	gap: 1rem;
	align-items: center;
	justify-content: center;
`
const Inner = styled.div`
	display: flex;
	flex-direction: row;
	gap: 1rem;
	align-items: center;
	justify-content: center;
`
const ButtonC = styled.input`
	border-radius: 5px;
	border: none;
	background: #00b6ff;
	padding: 1rem 3rem;
	&:hover {
		box-shadow: 2px 2px #f2ee0c;
	}
	color: #135af2;
`
const Select = styled.select`
	font-size: 1.5rem;
	background: papayawhip;
`
const A = styled.a`
	text-decoration: none;
	color: #ffffff;
`

export const Form: React.FC<FormProps> = () => {
	const Submit = async (e) => {
		e.preventDefault()
		const result = await fetch(
			`http://${window.location.hostname}:3000/upload`,
			{
				method: 'POST',
				body: JSON.stringify(formData),
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
			}
		)
		const res = await result.json()
		console.log(res)
	}
	const initialFormState = {
		link: '',
		title: '',
		id: '',
		tag: '',
		des: '',
	}
	const formReducer = (state, { type, payload }) => {
		switch (type) {
			case 'link':
				return { ...state, link: payload }
			case 'title':
				return { ...state, title: payload }
			case 'id':
				return { ...state, id: payload }
			case 'tag':
				return { ...state, tag: payload }
			case 'des':
				return { ...state, des: payload }
			default:
				throw new Error()
		}
	}
	const [formData, dispatch] = useReducer(formReducer, initialFormState)
	return (
		<form onSubmit={Submit}>
			<Container>
				<Infos>
					<Info
						width='900px'
						onChange={(e) =>
							dispatch({ type: 'link', payload: e.target.value })
						}
						placeholder={
							'www.youtube.com/watch?v=c8tbMUXOeFc(后面参数自己删掉)'
						}
					></Info>
					<Inner>
						<Info
							onChange={(e) =>
								dispatch({ type: 'title', payload: e.target.value })
							}
							placeholder={'稿子标题'}
						></Info>
						<Select
							onChange={(e) =>
								dispatch({ type: 'id', payload: e.target.value })
							}
						>
							<option selected value={'21'}>
								分区：生活
							</option>
							<option value={'27'}>动画(综合)</option>
							<option value={'17'}>游戏(单机)</option>
							<option value={'4'}>游戏(综合)</option>
							<option value={'138'}>生活(搞笑)</option>
							<option value={'24'}>MAD·AMV</option>
							<option value={'25'}>MMD·3D</option>
							<option value={'174'}>生活(其他)</option>
							<option value={'130'}>音乐综合</option>
							<option value={'65'}>游戏(网络)</option>
							<option value={'136'}>音游</option>
							<option value={'172'}>手机游戏</option>
							<option value={'129'}>舞蹈</option>
						</Select>
					</Inner>
					<Info
						onChange={(e) => dispatch({ type: 'tag', payload: e.target.value })}
						placeholder={'稿子标签Tag(使用英文逗号,隔开)'}
					></Info>
					<Info
						onChange={(e) =>
							dispatch({
								type: 'des',
								payload:
									e.target.value +
									'转载工具仓库地址:https://github.com/googidaddy/bili_upload_tool',
							})
						}
						placeholder={'稿子简介'}
					></Info>
				</Infos>
				<A href='https://github.com/googidaddy/bili_upload_tool'>!仓库地址!</A>
				<A href='https://github.com/googidaddy/bili_upload_tool/issues/new'>
					没有想要的分区？
				</A>
				<ButtonC type='submit' value='提交' />
			</Container>
		</form>
	)
}
