import Link from 'next/link';

export default function Cancel() {
    return (
        <div className="bg-[#f7f2ed] min-h-screen flex items-center justify-center">
            <div className="bg-white shadow-md rounded-lg p-8 max-w-md text-center">
                <h1 className="text-3xl font-bold text-[#102434] mb-4">Payment Cancelled</h1>
                <p className="text-lg text-[#102434] mb-6">
                    Your payment was cancelled. No charges were made.
                </p>
                <Link
                    href="/schedule"
                    className="inline-block bg-[#d8a21e] text-white py-3 px-6 rounded font-semibold hover:bg-[#c49119]"
                >
                    Back to Schedule
                </Link>
            </div>
        </div>
    );
}