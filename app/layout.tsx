import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { DeepgramContextProvider } from './context/DeepgramContextProvider';
import { MicrophoneContextProvider } from './context/MicrophoneContextProvider';

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
});
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
});

export const metadata: Metadata = {
	title: 'Bloom.ai',
	description: 'Bloom AI',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}
				suppressHydrationWarning
			>
				<DeepgramContextProvider>
					<MicrophoneContextProvider>{children}</MicrophoneContextProvider>
				</DeepgramContextProvider>
			</body>
		</html>
	);
}
