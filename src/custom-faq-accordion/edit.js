/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(props) {

	const {attributes , setAttributes} = props;
	const faqs = attributes.faqs || [];

	function handleQuestionChange(index, event) {
		const newFaqs = [...faqs];
		newFaqs[index].question = event.target.value;
		setAttributes({faqs : newFaqs});
	}

	function handleAnswerChange(index, event) {
		const newFaqs = [...faqs];
		newFaqs[index].answer = event.target.value;
		setAttributes({faqs: newFaqs});
	}

	function addMore() {
		const newFaqs = [...faqs, {question: "", answer: ""}];
		setAttributes({faqs: newFaqs});
	}

	return (
		<div { ...useBlockProps() }>
			      {faqs.map((faq, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>

			<h3>
				Question
			</h3>
			<input onChange={(e) => handleQuestionChange(index, e)} type="text" value={faqs.question} />
			<hr />
			<h3>
				Answer
			</h3>
			<input onChange={(e) => handleAnswerChange(index, e)} type="text" value={faqs.answer} />
				<hr />
				</div>
				  ))}

			<button type="button" onClick={addMore}>Add More</button>
		</div>
	);
}
