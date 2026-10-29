import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import App from '../App';

describe('App Component - Navigation & Key Components', () => {
  beforeEach(() => {
    window.scrollTo = () => {};
  });

  it('renders the Public Website initially with Header branding and full AMSHARTE definition', () => {
    render(<App />);

    // 1. Verify Header branding
    const brandTitles = screen.getAllByText('AMSHARTE');
    expect(brandTitles.length).toBeGreaterThanOrEqual(1);

    // 2. Verify "Site Officiel" badge
    const officialBadges = screen.getAllByText(/Site Officiel/i);
    expect(officialBadges.length).toBeGreaterThanOrEqual(1);

    // 3. Verify the full legal definition of AMSHARTE is present
    const definitions = screen.getAllByText(
      /Amis du Monde pour la Sauvegarde de l'Hygiène, de la Santé Sécurité au Travail en Milieu Rural Artisanal et Environnemental/i
    );
    expect(definitions.length).toBeGreaterThanOrEqual(1);

    // 4. Verify public website content is present
    const publicHeadings = screen.getAllByText(/Tortues Marines de Togbin Plage/i);
    expect(publicHeadings.length).toBeGreaterThanOrEqual(1);

    // 5. Verify colored navigation buttons are rendered on the public line
    expect(screen.getAllByRole('button', { name: /Fil d'Actualité/i }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('button', { name: /🚨 Signaler Tortue/i }).length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByRole('button', { name: /DE Amsharte/i }).length).toBeGreaterThanOrEqual(1);
  });

  it('switches from Public view to Intranet view when clicking "DE Amsharte"', () => {
    render(<App />);

    // Locate and click the "DE Amsharte" button
    const deButtons = screen.getAllByRole('button', { name: /DE Amsharte/i });
    expect(deButtons.length).toBeGreaterThanOrEqual(1);
    fireEvent.click(deButtons[0]);

    // Verify Intranet Header displays the "Site Public" return button
    const publicSiteButtons = screen.getAllByRole('button', { name: /Site Public/i });
    expect(publicSiteButtons.length).toBeGreaterThanOrEqual(1);

    // Verify Intranet secondary navigation tabs are displayed
    expect(screen.getByText(/Espace de travail DE/i)).toBeInTheDocument();
    expect(screen.getByText(/Espace de travail CA/i)).toBeInTheDocument();

    // Verify the Espace de Travail Hub key components load correctly
    expect(
      screen.getByText(/Espace de Travail & Cockpit Opérationnel AMSHARTE/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Annuaire des Membres & Pilotage des Cahiers des Charges/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Salle Virtuelle AMSHARTE/i)).toBeInTheDocument();
  });

  it('switches back from Intranet view to Public view when clicking "Site Public"', () => {
    render(<App />);

    // 1. Go to Intranet
    const deButtons = screen.getAllByRole('button', { name: /DE Amsharte/i });
    fireEvent.click(deButtons[0]);

    expect(
      screen.getByText(/Espace de Travail & Cockpit Opérationnel AMSHARTE/i)
    ).toBeInTheDocument();

    // 2. Click "Site Public" to return
    const publicSiteButtons = screen.getAllByRole('button', { name: /Site Public/i });
    expect(publicSiteButtons.length).toBeGreaterThanOrEqual(1);
    fireEvent.click(publicSiteButtons[0]);

    // 3. Verify public view is restored and intranet hub is unmounted
    expect(
      screen.getAllByText(/Tortues Marines de Togbin Plage/i).length
    ).toBeGreaterThanOrEqual(1);
    expect(
      screen.queryByText(/Annuaire des Membres & Pilotage des Cahiers des Charges/i)
    ).not.toBeInTheDocument();
  });

  it('navigates between public tabs correctly', () => {
    render(<App />);

    // Click on Conseil d'Administration tab on the public page
    const caButtons = screen.getAllByRole('button', { name: /Conseil d'Administration/i });
    expect(caButtons.length).toBeGreaterThanOrEqual(1);
    fireEvent.click(caButtons[0]);

    // Verify governance & board section is shown
    expect(
      screen.getByText(/Conseil d'Administration de l'ONG AMSHARTE/i)
    ).toBeInTheDocument();

    // Click on Fil d'Actualité tab to return
    const newsfeedButtons = screen.getAllByRole('button', { name: /Fil d'Actualité/i });
    expect(newsfeedButtons.length).toBeGreaterThanOrEqual(1);
    fireEvent.click(newsfeedButtons[0]);

    // Verify feed is active
    expect(
      screen.getByText(/Fil d'Actualité des Actions de Terrain/i)
    ).toBeInTheDocument();
  });
});
