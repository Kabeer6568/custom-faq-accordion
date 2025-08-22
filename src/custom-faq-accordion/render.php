

<div class="faq_box">
	<h2 class="main_heading">FAQs</h2>

	<?php if ( ! empty( $attributes['faqs'] ) ) : ?>
		<?php foreach ( $attributes['faqs'] as $faq ) : ?>
			<div class="faq_accordian">
				<p><?php echo esc_html( $faq['question'] ); ?></p>
				<button class="plus_sign" type="button" id="plus_open">+</button>
				<button class="minus_sign"style="display: none" id="minus_close"  type="button">-</button>
			</div>
			<div class="faq_accordian_ans" id="answer" style="display: none">
				<p><?php echo esc_html( $faq['answer'] ); ?></p>
			</div>
		<?php endforeach; ?>
	<?php endif; ?>
</div>
