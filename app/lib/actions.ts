'use server';

export async function createInvoice(formData: FormData) {
  // for use with much more complex fields
  // const rawFormData = Object.fromEntries(formData.entries())
  const rawFormData = {
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  };
  // Test it out:
  console.log(rawFormData);
}
